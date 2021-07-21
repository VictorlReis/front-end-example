export interface PersonDto {
  businessEntityID: number;
  name: string;
  phones: PersonPhoneDto[];
}

export interface PersonPhoneDto {
  businessEntityID: number;
  phoneNumber: string;
  phoneNumberTypeID: number;
}

export interface PersonPhoneUpdateRequest {
  businessEntityID: number;
  oldPhoneNumber: string;
  phoneNumber: string;
  phoneNumberTypeID: number;
}
