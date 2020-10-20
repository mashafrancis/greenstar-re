export interface TopbarProps {
	className?: string;
	onSidebarOpen?: () => void;
	pages: any;
}

export interface MenuGroupProps {
	item: {
		groupTitle: string;
		pages: Pages[];
	};
}

export interface Pages {
	href: string;
	title: string;
}
