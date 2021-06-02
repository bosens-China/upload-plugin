export interface Option {
  src?: string;
  to: string;
  port?: number;
  host: string;
  username?: string;
  password?: string;
  privateKey?: string;
}

class UploadPlugin {
  constructor(option: Option, remove = true);
}

export default UploadPlugin;
export = UploadPlugin;
