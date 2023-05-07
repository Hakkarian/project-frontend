export const selectIsUserRegister = ({ auth }) => auth.isRegister;
export const selectIsUserVerified = ({ auth }) => auth.verify;
export const selectUser = ({ auth }) => auth.user;
export const selectisAvatar = ({ auth }) => auth.avatarURL;
export const selectIsUserLoads = ({ auth }) => auth.isLoading;
