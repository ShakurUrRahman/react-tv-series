export default function Search({ searchTerm, setSearchTerm }) {
	return (
		<div className="search">
			<div>
				<img src="search.svg" alt="search" />

				<input
					type="text"
					placeholder="Search through thousands of TV series"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>
		</div>
	);
}
