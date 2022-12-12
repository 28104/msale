export const changePasswordApi = async (
  userId,
  curPassword,
  newPassword,
  cnfmNewPassword,
) => {
  return await fetch('https://msales-server.azurewebsites.net/changePassword', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: userId,
      password: curPassword,
      newPassword: newPassword,
      cnf_newPassword: cnfmNewPassword,
    }),
  });
};
export const dropdownApi = async userId => {
  return await fetch('https://msales-server.azurewebsites.net/userDetails', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId,
    }),
  });
};
