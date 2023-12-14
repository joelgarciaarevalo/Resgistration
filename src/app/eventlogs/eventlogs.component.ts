import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventLogs } from '../models/eventlogs';
import { ApipService } from '../services/api.service';
// import { Observable } from 'rxjs';

import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-eventlogs',
  templateUrl: './eventlogs.component.html',
  styleUrls: ['./eventlogs.component.scss'],
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,    
  ],
})
export class EventlogsComponent implements OnInit /*, AfterViewInit*/{
  eventlogsForm = new FormGroup({
    id: new FormControl(''),
    dateprocess: new FormControl(''),
    description: new FormControl(''),
    eventlogstypeid: new FormControl('')
  });

  eventlogss: EventLogs[] = []; 
  id = '';


  displayedColumns: string[] = ['id','dateprocess', 'description', 'eventlogstypeid'];
  dataSource = this.eventlogss;



  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };


  constructor (public apiService: ApipService){}
  @ViewChild(MatPaginator, {static: true}) paginator?: MatPaginator;
  /*ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }*/

  ngOnInit(): void {
    console.log("eventlogs: " + this.eventlogss);
    this.getEventLogs();
    console.log(this.paginator);
    /*console.log(this.dataSource.paginator);*/
    
  }

  getEventLogs(): void{
    this.apiService.getEventLogs().subscribe(response =>{
      const  eventlogs  = response;
      this.eventlogss = eventlogs;
      console.log(eventlogs);
    });
  }

  getEventLog(id: string): void {
    this.apiService.getEventLog(id).subscribe(response => { 
       const { id, dateprocess, description, eventlogstypeid } = response.data; 
       this.id = id;  
       this.eventlogsForm.setValue({id, dateprocess, description, eventlogstypeid});
     },(error) => {
       console.error(error);
     })
  }
  /*addEventLog(): void { 
    this.apiService.addEventLog(this.eventlogsForm.value).subscribe(() => {
      this.getEventLogs();
      this.eventlogsForm.reset();
    })
  }*/
  
}
