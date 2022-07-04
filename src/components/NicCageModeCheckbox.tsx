import { useNicCageMode } from "../context/NicCageContext";

const NicCageModeCheckbox = () => {
    const { active, setActive } = useNicCageMode();

    const onChange = () => {
        setActive(!active);
    }

    return  <div className="nicCageModeInput">
                <label>Nic Cage Mode</label>
                <input type="checkbox" onChange={onChange} checked={active} />
            </div>
}

export default NicCageModeCheckbox;