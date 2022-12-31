import { Department } from "./app/department";
import { Employee } from "./app/employee";
import { Skill } from "./app/skill";

export interface IEmployee {
    employee : Employee;
    department: Department;
    skill: Skill;
}