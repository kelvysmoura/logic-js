export default function ExerciseList (items) {
	items = Array.isArray(items) ? items.join("\n") : items;
	return `
        <ul class="w-full overflow-auto h-full scroll-style" id="exercise-list">
          ${items}
        </ul>
    `;
}