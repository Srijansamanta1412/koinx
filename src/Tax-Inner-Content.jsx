import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


function InnerTaxContent() {
    const year = [
        {
            value: 'Year',
            label: 'FY 2023-24',
        },
    ];
    const country = [
        {
            value: 'Country',
            label: 'Australia',
        },
    ];
    const income = [
        {
            value: '0-18000',
            label: '$0-$18000',
        },
        {
            value: '18001-45000',
            label: '$18001-45000',
        },
        {
            value: '45001-120000',
            label: '$45001-120,000',
        },
        {
            value: '120001-180000',
            label: '$120,001-$180,000',
        },
        {
            value: '180001',
            label: '$180,001+',
        },
    ];
    const [colorShortTerm, setColorShortTerm] = React.useState('blue');
    const [colorLongTerm, setColorLongTerm] = React.useState('grey');
    const [shortTerm, setShortTerm] = React.useState(true);
    const [purchasePrice, setPurchasePrice] = React.useState(0);
    const [salePrice, setSalePrice] = React.useState(0);
    const [expenses, setExpenses] = React.useState(0);
    const [capitalGains, setCapitalGains] = React.useState(0);
    const [taxPercent, setTaxPercent] = React.useState('0%');
    const [percentage,setPercentage]=React.useState(0);

    function getCapitalGains() {
        console.log(salePrice + "Salesprice  " + purchasePrice + "PurchasePrice  " + expenses + "Expenses   ")
        setCapitalGains(salePrice - purchasePrice - expenses)
        console.log(capitalGains)
    }
    React.useEffect(() => {
        getCapitalGains();
        console.log("TESTING USEFFECT")
    }, [purchasePrice, salePrice, expenses])

    return (
        <>
            <h1>Free Crypto Tax Calculator-Australia</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },

                }}
                noValidate
                autoComplete="off"
                style={{ paddingLeft: '25%' }}
            >
                <div style={{ display: 'flex' }}>
                    <TextField
                        id="filled-select-currency-native"
                        select
                        label="Financial Year"
                        defaultValue="EUR"
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Select your Financial Year"
                        variant="filled"

                    >
                        {year.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                    <TextField
                        id="filled-select-currency-native"
                        select
                        label="Country"
                        defaultValue="EUR"
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please select your Country"
                        variant="filled"
                    >
                        {country.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </div>
                <div style={{ display: 'flex' }}>
                    <TextField
                        required
                        id="filled-required"
                        label="Required"
                        variant="filled"
                        helperText="Enter Purchase Price Of Crypto"
                        type='number'
                        value={purchasePrice}
                        onInput={(e) => {
                            setPurchasePrice(e.target.value);
                            /*console.log(purchasePrice+"PUR")
                            console.log(e.target.value)
                            getCapitalGains();*/
                        }
                        }
                    />
                    <TextField
                        required
                        id="filled-required"
                        label="Required"
                        variant="filled"
                        helperText="Enter Sale Price Of Crypto"
                        type='number'
                        value={salePrice}
                        onInput={async (e) => {
                            setSalePrice(e.target.value);
                            /*console.log(salePrice)
                            getCapitalGains();*/
                        }
                        }
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        required
                        id="filled-required"
                        label="Required"
                        variant="filled"
                        helperText="Enter Your Expenes"
                        type='number'
                        value={expenses}
                        onInput={(e) => {
                            setExpenses(e.target.value);
                            /*console.log(e.target.value)
                            getCapitalGains();*/
                        }
                        }
                    >{expenses}</TextField>
                    <div>
                        <Stack direction="row" spacing={2}>
                            <Button variant="outlined" onClick={(e) => {
                                console.log(e.target)

                                setShortTerm(true);
                                setColorShortTerm('blue')
                                setColorLongTerm('grey')

                            }} style={{ color: colorShortTerm }}>Short Term</Button>
                            <Button variant="outlined" onClick={(e) => {
                                console.log(e.target.style.color)
                                setShortTerm(false);
                                setColorShortTerm('grey')
                                setColorLongTerm('blue')
                            }} style={{ color: colorLongTerm }}>
                                Long Term
                            </Button>
                        </Stack>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex' }}>
                        <TextField
                            id="filled-select-currency-native"
                            select
                            label="Annual Income"
                            defaultValue="EUR"
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Select your Annual Income"
                            variant="filled"
                            onChange={(e) => {
                                console.log(e.target.value)
                                let selectedIncomeRange = e.target.value
                                if (selectedIncomeRange == '0-18000'){
                                    setTaxPercent('0%')
                                    setPercentage(0);
                                }
                                else if (selectedIncomeRange == '18001-45000'){
                                    setTaxPercent('Nil+19% excess over $18,200')
                                    setPercentage(19);
                                }
                                else if (selectedIncomeRange == '45001-120000'){
                                    setTaxPercent('$5092+32.5% excess over $45,001')
                                    setPercentage(32.5);
                                }
                                else if (selectedIncomeRange == '120001-180000'){
                                    setTaxPercent('$29,467+37% excess over $1,20,000')
                                    setPercentage(37);
                                }
                                else if (selectedIncomeRange == '180001'){
                                    setTaxPercent('$51,661+45% excess over $1,80,000')
                                    setPercentage(45);
                                }

                            }}
                        >
                            {income.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                        <div style={{ marginLeft: 1 }}>
                            <div><b>Tax Rate:</b></div>
                            <div>{taxPercent}</div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <TextField
                        required
                        id="filled-required"
                        label="Required"
                        variant="filled"
                        helperText="Capital Gains Amount"
                        type='number'
                        defaultValue={capitalGains}
                        disabled
                        value={capitalGains}
                    />
                    <TextField
                        required
                        id="filled-required"
                        label="Required"
                        variant="filled"
                        helperText="Discount on Long Term Capital gains"
                        type='number'
                        defaultValue={capitalGains}
                        disabled
                        value={capitalGains / 2}
                    />
                </div>
                <div style={{ display: 'flex' }}>

                    <Box sx={{ bgcolor: '#B3F097', height: '20vh', width: '15em', borderRadius: 5, marginRight: 5, padding: 2 }} >
                        <div>
                            <b>Net Capital Gains Tax Amount</b>
                        </div>
                        <div>
                            ${
                                shortTerm ? capitalGains : capitalGains / 2
                            }
                        </div>
                    </Box>


                    <Box sx={{ bgcolor: '#3BB4B6', height: '20vh', width: '15rem', borderRadius: 5, padding: 2 }} >
                        <div>
                            <b>Tax You Need To Pay</b>
                        </div>
                        <div>${shortTerm?capitalGains*percentage/100:capitalGains*percentage/200}</div>
                    </Box>

                </div>
            </Box>
        </>
    )
}
export default InnerTaxContent;