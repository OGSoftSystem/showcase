import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CiSearch } from "react-icons/ci";;



const SearchInput = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="flex items-center gap-2">
          <CiSearch size={40} />
          <p>Look up</p>
        </div>
        <span className="sr-only">Search</span>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>What are you looking for?</AlertDialogTitle>
          <AlertDialogDescription>
            Search for Coin / Block / Transaction.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form action="">
          <input
            type="text"
            className="border-input border-2 p-2  rounded-full bg-transparent focus-visible:border-none  w-full"
          />
          <input type="submit" className="hidden" />
        </form>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {/* <AlertDialogAction>Continue</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SearchInput;
