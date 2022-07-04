import { useNavigate } from "react-router-dom"
import { routes } from "../routes";

type YearDropdownProps = {
    selectedYear: string;
}

const YearDropdown = ({ selectedYear } : YearDropdownProps) => {
    const navigate = useNavigate();
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        navigate(`${routes.mostPopular}${event.target.value}`)
    }

    return <select onChange={onChange} value={selectedYear}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
            </select>
}
                        

export default YearDropdown