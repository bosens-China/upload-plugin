import { NodeSSH } from 'node-ssh';

import { Option } from './typings';

export const isObject = (obj: any): obj is Object => typeof obj === 'object' && obj;

// 删除文件夹
export const removeDir = async (option: Option) => {
  const ssh = new NodeSSH();
  await ssh.connect(option);
  await ssh.execCommand(`rm -rf ${option.to}`);
  await ssh.dispose();
};

// 上传文件夹
export const uploadDir = async (option: Option) => {
  const ssh = new NodeSSH();
  await ssh.connect(option);
  await ssh.putDirectory(option.src!, option.to, {
    recursive: true,
  });
  await ssh.dispose();
};
