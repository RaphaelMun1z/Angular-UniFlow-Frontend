import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-plan-selection-step',
    imports: [ReactiveFormsModule, FormsModule],
    templateUrl: './plan-selection-step.component.html',
    styleUrl: './plan-selection-step.component.scss'
})

export class PlanSelectionStepComponent {
    goBack() {
        throw new Error('Method not implemented.');
    }
    selectedPlan!: string;
    onPlanChange(arg0: string) {
        throw new Error('Method not implemented.');
        console.log(arg0)
    }
    onSubmit() {
        throw new Error('Method not implemented.');
    }
    planForm!: FormGroup<string>;
    
}
