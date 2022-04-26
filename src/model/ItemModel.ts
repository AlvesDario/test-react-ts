export class ItemModel {
  name: string;
  lastName: string | undefined;
  phone: string | undefined;
  address: string | undefined;

  constructor(
    name: string,
    lastName?: string,
    phone?: string,
    address?: string) {
    this.name = name;
    this.lastName = lastName;
    this.phone = phone;
    this.address = address;
  }

  get fullName(): string {
    return `${this.name} ${this.lastName}`
  }
}