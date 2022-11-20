import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  public isShowSpinner: boolean = false;

  constructor(private readonly spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.spinnerService.spinner$.subscribe((value) => (this.isShowSpinner = value));
  }
}
