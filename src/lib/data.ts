import data from "@/lib/data.json";

export function fetchJobById(id: number) {    
    const job = data.find((job) => {
        if(job.id == id)
            return job;
        return null;
    });        
    return job;
}

export function fetchJobByFilter(filter: string) {        
    const job = data.filter((job) => {
        if(job.contract == filter)
            return job;
        return null;
    });        
    return job;
}