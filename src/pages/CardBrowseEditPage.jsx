import { useParams } from "react-router-dom";
import BrowseEdit from "../components/BrowseEdit/BrowseEdit";

export default function CardBrowseEditPage() {
const { id } = useParams();

  return (
    <BrowseEdit id={id} />
  );

}