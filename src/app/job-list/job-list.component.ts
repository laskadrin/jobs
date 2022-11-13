import { Component, OnInit } from '@angular/core';
import { JobApiService } from '../services/job-api.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: any = []
  page: number = 1;
  constructor(
    public jobApiService: JobApiService,

  ) {

  }

  async ngOnInit() {
    this.jobs = await this.jobApiService.getJobs();

  }
  daysAgo(date: string) {
    const dateOfPost = Date.parse(date),
      diffTime = Math.abs(Date.now() - dateOfPost),
      daysGone = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (daysGone == 0) {
      return 'Posted today'
    } else if (daysGone == 1) {
      return 'Posted yesterday'
    } else {
      return 'Posted ' + daysGone + ' days ago';
    }
  }





}
