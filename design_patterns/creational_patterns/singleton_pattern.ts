class School {
    private static _schoolInstance: School

    private constructor(private numberOfStudents: number, private schoolName: string, private isRegistered: boolean) {}

    public get instance(): School {
        if(!School._schoolInstance) {
            School._schoolInstance = new School(30, 'Elite School', true)
        }
        return School._schoolInstance
    }

}