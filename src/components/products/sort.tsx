import { Dispatch } from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/components/ui/link";

export function Sort({
  sortOrderReserve,
  reverseSortOrder,
}: {
  sortOrderReserve: boolean;
  reverseSortOrder: Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Link
          size="small"
          colour="light"
          iconPlacement="right"
          icon="chevron-down"
        >
          Sort
        </Link>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>Sort Alphabetically</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={sortOrderReserve === false}
          onCheckedChange={() => reverseSortOrder(false)}
        >
          Asc
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={sortOrderReserve === true}
          onCheckedChange={() => reverseSortOrder(true)}
        >
          Desc
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
