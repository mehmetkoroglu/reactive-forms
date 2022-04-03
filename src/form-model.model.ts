export class FormGeneral {

	generalInformation?: FormGeneralInformation

	personalInformation?: FormPersonalInformation

	educationInformation?: FormEducationInformation

	workExperience?: FormWorkExperience

	others?: FormOthers

	criminalRecords?: FormCriminalRecords

	otherDocuments?: FormOtherDocuments

}


export class FormGeneralInformation {

	photoUrl?: string

	assignmentDate?: number

}

export class FormPersonalInformation {

	name?: string

	surname?: string

	gender?: string

	birhtPlace?: string

	birthDate?: number | Date

	TCIDNumber?: number

	adress?: string

	phoneNumber?: PhoneNumber[]

	email?: string[]

	doSmoke?: boolean

	postPonementSituation?: string //Askerlik durumu kişisel bilgilere taşı

	postPonementDate?: number

}


export class PhoneNumber {

	name?: string

	phoneNumber?: string
}

export class FormEducationInformation {

	schoolInformation?: SchoolInformation[]

	certificates?: Certificates[]

}

export class Certificates {

	certificateName?: string

	certificateDate?: number

}

export class SchoolInformation {

	schoolName?: string

	schoolProfessionality?: string

	schoolStartDate?: number | Date

	schoolEndDate?: number | Date

	schoolGraduationGrade?: string

}

export class FormWorkExperience {

	companyInformation?: CompanyInformation[]

}

export class CompanyInformation {

	companyName?: string

	job?: string

	jobStartDate?: number

	jobEndDate?: number

	jobEndReason?: string

	salary?: number

	currency?: string
}

export class FormOthers {

	doHaveHealthIssue?: boolean

	healthIssueDescription?: string

	emergencyPersonInformation?: EmergencyPersonInformation[]

}

export class EmergencyPersonInformation {

	emergencyPersonName?: string

	emergencyPersonProximity?: string

	emergencyPersonPhoneNumber?: number

}

export class FormCriminalRecords {

	criminalRecord?: string

	criminalRecordStorageURl?: string

}

export class FormOtherDocuments {

	otherDocuments?: string[]

}