import { Component, computed, inject} from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
// @Input() results ? : {
//   year: number,
//   interest: number,
//   valueEndOfYear: number,
//   annualInvestment: number,
//   totalInterest: number,
//   totalAmountInvested:  number,
// } [];

// results ?: {
//   year: number,
//   interest: number,
//   valueEndOfYear: number,
//   annualInvestment: number,
//   totalInterest: number,
//   totalAmountInvested:  number,
// }[];

// results = signal<{
//   year: number,
//   interest: number,
//   valueEndOfYear: number,
//   annualInvestment: number,
//   totalInterest: number,
//   totalAmountInvested:  number,
// }[] | undefined>(undefined)

// results = input<{
//   year: number,
//   interest: number,
//   valueEndOfYear: number,
//   annualInvestment: number,
//   totalInterest: number,
//   totalAmountInvested:  number,
// }[] | undefined>(undefined);

private investmentService = inject(InvestmentService);

// constructor(private investmentService: InvestmentService){
  // this.results.set(this.investmentService.resultData);
// }


//  get results()
//  {
//    return this.investmentService.resultData.asReadonly();
//  }
// results = this.investmentService.resultData.asReadonly();
  results = computed(()=>this.investmentService.resultData());
}
