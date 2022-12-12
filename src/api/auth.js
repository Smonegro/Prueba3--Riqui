import instance from "./Instance";

export function register(values) {
  return instance.post("auth/register", values);
}
