export const emptyUser = {
  id: "",
  phone: "",
  lastName: "",
  firstName: "",
  location: {
    state: "",
    street: "",
    city: "",
    timezone: "",
    country: "",
  },
  email: "",
  gender: "",
  title: "",
  registerDate: "",
  picture: "",
  dateOfBirth: "",
};

export type User = typeof emptyUser;
export type SimpleUser = Pick<
  User,
  "id" | "lastName" | "firstName" | "picture"
>;
