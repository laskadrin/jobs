import { Component, OnInit } from '@angular/core';
import { JobApiService } from '../services/job-api.service';
import { SafePipe } from '../pipes/safe.pipe';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: any = []
  constructor(
    public jobApiService: JobApiService,
    private sanitizer: DomSanitizer
  ) { }

  async ngOnInit() {
    this.jobs = await this.jobApiService.getJobs();

  }
  daysAgo(date: string) {
    const dateOfUpdate = Date.parse(date),
      diffTime = Math.abs(Date.now() - dateOfUpdate),
      daysGone = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return daysGone;


  }
  locationO = '"https://maps.google.com/maps?q=9.804124,147.139488&t=&z=13&ie=UTF8&iwloc=&output=embed"'
  locationFinder(location: any) {
    const lat = location.lat
    const long = location.long
    this.locationO = ("https://maps.google.com/maps?q=%20" + lat + "%20" + long + "&t=&z=3&ie=UTF8&iwloc=&output=embed")

  }

}
