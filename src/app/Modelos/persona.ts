export class Persona {
    static setName(): string | undefined {
      throw new Error('Method not implemented.');
    }
    name: string = "Ruben";
    lastName: string = "Hernandez Barraza";
    sex:string = "Masculino";
    age:string = "18";

    public get setName(): string{
        return this.name;
    }
    public get setLastName(): string{
        return this.lastName;
    }
    public get setSex(): string{
        return this.sex;
    }
    public get setAge(): string{
        return this.age;
    }
    
}
