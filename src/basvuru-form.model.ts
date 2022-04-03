export class FormGeneralInformations{

	photoUrl?: string

	assignmentDate?: number

}

export class FormPersonalInformation {

	name?: string

	surname?: string

	gender?: string
	
	birhtPlace?: string

	birthDate?: number

	TCIDNumber?: number

	adress?: string

	phoneNumber?: number[]

	email?: string[]

	doSmoke?: boolean

}

export class FormEducationInformation {

	primarySchool?: string

	primarySchoolStartDate?: number	

	primarySchoolEndDate?: number

	primarySchoolGraduationGrade?: number

	highSchool?: string

	highSchoolStartDate?: number	

	highSchoolEndDate?: number

	highSchoolGraduationGrade?: number

	associateDegree?: string

	associateDegreeProfessionality?: string

	associateDegreeStartDate?: number	

	associateDegreeEndDate?: number

	associateDegreeGraduationGrade?: number

	bachelorDegree?: string

	bachelorDegreeProfessionality?: string

	bachelorDegreeStartDate?: number	

	bachelorDegreeEndDate?: number

	bachelorDegreeGraduationGrade?: number

	masterDegree?: string

	masterDegreeProfessionality?: string

	masterDegreeStartDate?: number	

	masterDegreeEndDate?: number

	masterDegreeGraduationGrade?: number

	doctorsDegree?: string

	doctorsDegreeProfessionality?: string

	doctorsDegreeStartDate?: number	

	doctorsDegreeEndDate?: number

	doctorsDegreeGraduationGrade?: number

}

export class FormWorkExperience {

	companyName?: string[]

	job?: string[]

	jobStartDate?: number[]

	jobEndDate?: number[]

	jobEndReason?: string[]

	salary?: number[]

}

export class FormOthers {

	doHaveHealthIssue?: boolean

	healthIssueDescription?: string

	emergencyPersonName?: string

	emergencyPersonProximity?: string

	emergencyPersonPhoneNumber?: number

}