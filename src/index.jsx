import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function tofloat(num) {
    return Math.floor(num * 10000)/10000;
}

class SalaryCal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

            monthlysalary : 4000,
            monthlyFiveFundBaseNumber : 3000,
            another_month_salary: 0,
            year_prize_salary : 0,

            pension_fund_tax_person : 0.08,
            medical_insurance_tax_person : 0.02,
            industrial_injury_insurance_tax_person : 0,
            unemployment_insurance_tax_person  : 0.005,
            maternity_insurance_tax_person  : 0,
            housing_provident_fund_tax_person  : 0.1,

            pension_fund_tax_company : 0.16,
            medical_insurance_tax_company : 0.09,
            industrial_injury_insurance_tax_company : 0.004,
            unemployment_insurance_tax_company : 0.005,
            maternity_insurance_tax_company : 0.008,
            housing_provident_fund_tax_company : 0.1
        };
    }

    handlemonthlysalaryChange(event) {
        this.setState({
            monthlysalary: event.target.value
        });
    }

    handlemonthlyFiveFundBaseNumberChange(event) {
        this.setState({
            monthlyFiveFundBaseNumber: event.target.value,
        });
    }

    handleyearprizesalaryChange(event) {
        this.setState({
            year_prize_salary: event.target.value,
        });
    }

    handleanother_month_salaryChange(event) {
        this.setState({
            another_month_salary: event.target.value,
        });
    }

    handlehousing_provident(event) {
        this.setState({
            housing_provident_fund_tax_person: event.target.value,
            housing_provident_fund_tax_company: event.target.value
        });
    }


    render() {

        var monthlysalary = tofloat(this.state.monthlysalary);
        var monthlyFiveFundBaseNumber = tofloat(this.state.monthlyFiveFundBaseNumber);
        const year_prize_salary = tofloat(this.state.year_prize_salary);
        const another_month_salary = tofloat(this.state.another_month_salary);



        const monthly_five_found_tax_person_simple = 0.105;
        const housing_provident_fund_tax_person_simple = 0.08;
        const pension_fund_tax_person = this.state.pension_fund_tax_person;
        const medical_insurance_tax_person = this.state.medical_insurance_tax_person;
        const industrial_injury_insurance_tax_person = this.state.industrial_injury_insurance_tax_person;
        const unemployment_insurance_tax_person  = this.state.unemployment_insurance_tax_person;
        const maternity_insurance_tax_person  = this.state.maternity_insurance_tax_person;
        const housing_provident_fund_tax_person = this.state.housing_provident_fund_tax_person;
        const monthly_five_found_tax_person = tofloat(pension_fund_tax_person + medical_insurance_tax_person + industrial_injury_insurance_tax_person + unemployment_insurance_tax_person + maternity_insurance_tax_person);

        const monthly_five_found_person_simple = tofloat(monthlyFiveFundBaseNumber * monthly_five_found_tax_person_simple);
        const monthly_five_found_person = tofloat(monthlyFiveFundBaseNumber * monthly_five_found_tax_person);
        const housing_provident_fund_person_simple = tofloat(monthlyFiveFundBaseNumber * housing_provident_fund_tax_person_simple);
        const housing_provident_fund_person = tofloat(monthlyFiveFundBaseNumber * this.state.housing_provident_fund_tax_person);


        const monthly_five_found_tax_company_simple = 0.318;
        const housing_provident_fund_tax_company_simple = 0.08;
        const pension_fund_tax_company = this.state.pension_fund_tax_company;
        const medical_insurance_tax_company = this.state.medical_insurance_tax_company;
        const industrial_injury_insurance_tax_company = this.state.industrial_injury_insurance_tax_company;
        const unemployment_insurance_tax_company = this.state.unemployment_insurance_tax_company;
        const maternity_insurance_tax_company = this.state.maternity_insurance_tax_company;
        const housing_provident_fund_tax_company = this.state.housing_provident_fund_tax_company;
        const monthly_five_found_tax_company = tofloat(pension_fund_tax_company + medical_insurance_tax_company + industrial_injury_insurance_tax_company + unemployment_insurance_tax_company + maternity_insurance_tax_company);

        const monthly_five_found_company_simple = tofloat(monthlyFiveFundBaseNumber * monthly_five_found_tax_company_simple);
        const monthly_five_found_company = tofloat(monthlyFiveFundBaseNumber * monthly_five_found_tax_company);
        const housing_provident_fund_company_simple = tofloat(monthlyFiveFundBaseNumber * housing_provident_fund_tax_company_simple);
        const housing_provident_fund_company = tofloat(monthlyFiveFundBaseNumber * housing_provident_fund_tax_company);



        const monthlysalaryCash =  tofloat(monthlysalary - monthly_five_found_person - housing_provident_fund_person);
        const yearly_FiveFund_salary = tofloat((monthly_five_found_person + housing_provident_fund_person + monthly_five_found_company + housing_provident_fund_company) * 12);
        const yearlysalaryCash = tofloat(monthlysalaryCash * 12 + year_prize_salary + another_month_salary);
        const yearlytotalIncome = tofloat(yearlysalaryCash + yearly_FiveFund_salary);

        return (
            <div>
                <form className='form-wrap'>
                    ?????????
                    <input type="text" value={monthlysalary} onChange={this.handlemonthlysalaryChange.bind(this)}></input><br></br>
                    ???????????????????????????
                    <input type="text" value={monthlyFiveFundBaseNumber} onChange={this.handlemonthlyFiveFundBaseNumberChange.bind(this)}></input><br></br>
                    ??????????????????????????????
                    <input type="text" value={housing_provident_fund_tax_person} onChange={this.handlehousing_provident.bind(this)}></input><br></br>
                    ???????????????
                    <input type="text" value={year_prize_salary} onChange={this.handleyearprizesalaryChange.bind(this)}></input><br></br>
                    ?????????????????????
                    <input type="text" value={another_month_salary} onChange={this.handleanother_month_salaryChange.bind(this)}></input><br></br>
                </form>
                <br></br>
                <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>??????????????????</th>
                        <th>??????????????????</th>
                        <th>?????????????????????</th>
                        <th>?????????????????????</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>???????????? :</td>
                        <td>{monthly_five_found_tax_person_simple}</td>
                        <td>{monthly_five_found_tax_company_simple}</td>
                        <td>{housing_provident_fund_tax_person_simple}</td>
                        <td>{housing_provident_fund_tax_company_simple}</td>
                    </tr>
                    <tr>
                        <td>???????????? :</td>
                        <td>{monthly_five_found_tax_person}</td>
                        <td>{monthly_five_found_tax_company}</td>
                        <td>{housing_provident_fund_tax_person}</td>
                        <td>{housing_provident_fund_tax_company}</td>
                    </tr>
                    <tr>
                        <td>???????????? :</td>
                        <td>{monthly_five_found_person_simple}</td>
                        <td>{monthly_five_found_company_simple}</td>
                        <td>{housing_provident_fund_person_simple}</td>
                        <td>{housing_provident_fund_company_simple}</td>
                    </tr>
                    <tr>
                        <td>???????????? :</td>
                        <td>{monthly_five_found_person}</td>
                        <td>{monthly_five_found_company}</td>
                        <td>{housing_provident_fund_person}</td>
                        <td>{housing_provident_fund_company}</td>
                    </tr>
                </tbody>
                </table>
                <br></br>
                <p>?????????{monthlysalary}</p>
                <p>???????????????????????????{monthlyFiveFundBaseNumber}</p>
                <p>????????????????????? {monthlysalaryCash} </p>
                <p>????????????????????? {yearlysalaryCash} </p>
                <p>??????????????????????????? {yearly_FiveFund_salary} </p>
                <p>????????? ??? {year_prize_salary}</p>
                <p>????????? ??? {another_month_salary}</p>
                <p>???????????????????????????????????? {yearlytotalIncome} </p>
            </div>
        )
    }
}
ReactDOM.render(
    <SalaryCal />, 
    document.querySelector("#app")
);