import {DataTransferObject} from '../../../shared/data-provider';

export class CredentialsDTO implements DataTransferObject {
  username: string;
  password: string;
  using2FA = false;
  code: string;

  constructor(username: string, password: string, using2FA: boolean, code?: string) {
    this.username = username;
    this.password = password;
    this.using2FA = using2FA;
    this.code = !!code ? code : null;
  }

}
