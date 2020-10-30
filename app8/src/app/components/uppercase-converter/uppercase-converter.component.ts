import { Component, OnInit } from '@angular/core';
import { UppercaseConverterService } from '../../services/uppercase-converter.service';
import { HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-uppercase-converter',
  templateUrl: './uppercase-converter.component.html',
  styleUrls: ['./uppercase-converter.component.css']
})
export class UppercaseConverterComponent implements OnInit {
  result: any;
  // tslint:disable-next-line:variable-name
  constructor(private _service: UppercaseConverterService) { }

  ngOnInit(): void {
  }

  public convert(obj): any{
    // The function parameter is as follows {'message' : my_message}
    this._service.convertToUpper(obj).subscribe(
      res => this.result = res,
      (err: HttpErrorResponse) => {
        console.error(err);
      }
    );
  }
}
