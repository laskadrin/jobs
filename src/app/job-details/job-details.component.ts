
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
    private jobApiService: JobApiService,

  ) { }

  job: any = {}
  async ngOnInit() {
    this.job = await this.jobApiService.getJob(this.activatedRoute.snapshot.params['id'])
    console.log(this.job)
  }
  daysAgo(date: string) {
    const dateOfPost = Date.parse(date),
      diffTime = Math.abs(Date.now() - dateOfPost),
      daysGone = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return daysGone;
  }
  locationFinder(lat: string, long: string) {
    return "https://maps.google.com/maps?q=" + lat + "," + long + "&t=&z=13&ie=UTF8&iwloc=&output=embed"
  }

}
