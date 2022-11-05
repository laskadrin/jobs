import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobApiService {
  constructor() { }
  async getJobs() {
    const response = await fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
    return await response.json();
  }
  async getJob(id: string) {
    const jobs = await this.getJobs();
    return jobs.find((job: any) => job.id == id)
  }
}
