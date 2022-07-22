import DropdownMenu from "../ui/dropDownMenu"

export default function ImageOptions() {
    return (
        <DropdownMenu>
            <DropdownMenu.Toggle />
            <DropdownMenu.List>
                <DropdownMenu.Item>Edit</DropdownMenu.Item>
                <DropdownMenu.Item>Delete</DropdownMenu.Item>
            </DropdownMenu.List>
        </DropdownMenu>
    )
}