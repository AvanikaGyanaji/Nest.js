import { IsInt, IsString } from "class-validator";

export class CreateCostomerDto {
    @IsString()
    name: string;

    @IsInt()
    age: number;
}