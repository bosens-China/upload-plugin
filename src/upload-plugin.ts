/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { Compiler, Stats } from 'webpack';
import { isObject, uploadDir, removeDir } from './utils';
import { Option } from './typings';

class UploadPlugin {
  public stats: Stats;

  public option: Option & Record<string, any>;

  public removeDir: boolean;

  constructor(option: Option, remove = true) {
    this.stats = null as unknown as Stats;
    this.option = option;
    this.removeDir = remove;
    this.init();
  }

  init() {
    this.checkOption();
    this.setOption();
  }

  checkOption(option = this.option) {
    if (!isObject(option)) {
      throw new Error('option Must be an object!');
    }
    const result = ['to', 'host'].filter((f) => !option[f]);
    if (result.length) {
      throw new Error(`The ${result.join(',')} parameter is required!`);
    }
    if (!option.password && !option.privateKey) {
      throw new Error('password and privateKey must have one entry!');
    }
  }

  setOption() {
    const option = {
      port: 22,
      username: 'root',
    };
    this.option = {
      ...option,
      ...this.option,
    };
  }

  apply(compiler: Compiler) {
    compiler.hooks.done.tap('upload-plugin', async (stats) => {
      console.time('time');
      const src = stats.compilation.outputOptions.path;
      this.option.src = this.option.src ?? src;
      if (this.removeDir) {
        await removeDir(this.option);
      }
      await uploadDir(this.option);
      console.timeEnd('time');
    });
  }
}

export default UploadPlugin;
