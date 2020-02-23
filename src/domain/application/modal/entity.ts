export type ModalState = {
  isOpen?: boolean;
  message?: string;
  type?: ModalType;
  go?: string;
  back?: string;
  buttonText?: string;
};

export enum ModalType {
  Normal = "nomal",
  Error = "error",
  Success = "success"
}
