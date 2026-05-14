import HistoryFilterSelect from "../../../features/HistoryFilterSelect/ui/HistoryFilterSelect"
import SearchBar from "../../../features/SearchBar/ui/SearchBar";
import type { Option } from "../../../shared/CustomSelect/model/types";


interface IFiltersProps{
    options: Option[]
}
function Filters({ options }: IFiltersProps) {
  return (
    <div>
      <SearchBar />
      <HistoryFilterSelect options={options} />
    </div>
  );
}

export default Filters