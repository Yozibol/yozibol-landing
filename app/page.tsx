import { useTranslations } from "next-intl";

export default function Home() {
	const t = useTranslations()
	return (
		<div className='container'>
			{t("listOfAuthors")}
		</div>
	);
}
