export class Group {
    constructor
      (
        public id: string,
        public name: string,
        public date: string,
        public description: string,
	public domainname: string,
	public privacy: string,
	public members: string,
        public admins: string, 
        public UID: string 
	)
    {}   
}

