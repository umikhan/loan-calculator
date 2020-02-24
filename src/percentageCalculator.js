// this is backend where on the basis of amount and year we calculate installment 
// for example we have set the percentage on 
// 8%


export function percentageCalculator(amount, duration) {
	let newAmount = amount
	for (let i=1; i <= duration; i++){
		newAmount = newAmount + newAmount*0.08
	}
	const monthlyInstallment = newAmount / (duration * 12)
	return { amount, duration, monthlyInstallment }
}
 