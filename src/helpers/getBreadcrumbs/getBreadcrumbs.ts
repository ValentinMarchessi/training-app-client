//'/routines/create/preview' => ['/routines','/routines/create','/routines/create/preview']

export default function getBreadcrumbs(location: string): string[] {
	const breadcrumbs = location.split('/').filter((e) => e !== ''); //[routines,create,preview]
	for (let i = 0; i < breadcrumbs.length; i++) {
		breadcrumbs[i] = i > 0 ? `${breadcrumbs[i - 1]}/${breadcrumbs[i]}` : `/${breadcrumbs[i]}`;
	}
	return breadcrumbs;
}
