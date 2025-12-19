import { useMemo, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import "./CountryCodeSelect.css";

type Props = {
    value: string; // "+57"
    onChange: (dialCode: string) => void;
};

export default function CountryCodeSelect({ value, onChange }: Props) {
    const countries = useMemo(() => getCountries(), []); // ISO2 list
    const customLabels = useMemo(() => {
        const labels: Record<string, { primary: string; secondary: string }> = {};
        for (const iso2 of countries) {
            labels[iso2] = { primary: "", secondary: `+${getCountryCallingCode(iso2)}` };
        }
        return labels;
    }, [countries]);

    const initialIso2 =
        countries.find((c) => `+${getCountryCallingCode(c)}` === value) || "CO";
    const [selected, setSelected] = useState(initialIso2);

    return (
        <ReactFlagsSelect
            selected={selected}
            onSelect={(iso2) => {
                setSelected(iso2 as CountryCode);
                onChange(`+${getCountryCallingCode(iso2 as CountryCode)}`);
            }}
            countries={countries}
            customLabels={customLabels}   // secondary = +código [page:1]
            showSelectedLabel={false}
            showSecondarySelectedLabel={true}
            showOptionLabel={false}
            showSecondaryOptionLabel={true}
            searchable
            className="country-select-rfs"
            selectButtonClassName="country-select-btn"
        />
    );
}
