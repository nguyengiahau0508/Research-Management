import { Department } from "src/modules/departments/entities/department.entity"
import { Lecturer } from "src/modules/lecturers/entitites/lecturer.repository"
import { ResearchField } from "src/modules/research-fields/entities/research-field.entity"
import { ResearchMember } from "src/modules/research-members/entities/research-member.entity"
import { User } from "src/modules/users/entities/user.entity"

export class RegisterFacultyResearchTopicDto {
  user: User

  name: string

  department: Department

  researchField: ResearchField

  lecturer: Lecturer

  isDocumentPrepared: boolean

  necessity: string

  mainContent: string

  productsResults: string

  funding: number

  durationMonths: number

  researchCapacity: string

  researchMembers?: ResearchMember[]

}
