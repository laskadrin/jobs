import { JobApiService } from './../services/job-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private jobApiService: JobApiService
  ) { }
  job = {}
  async ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id'])
    this.job = await this.jobApiService.getJob(this.activatedRoute.snapshot.params['id'])
  }

}
