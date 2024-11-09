function afficheTable(category) {
    const tableContainer = document.getElementById('table-container');
    const tableTitle = document.getElementById('table-title');
    const tableChange = document.getElementById('table-change');
    const ajouter = document.getElementById("ajouter")

    tableContainer.classList.remove('hidden');

    if (category === 'clients') {
        ajouter.classList.add("hidden");
        tableTitle.textContent = 'Clients Table';
        tableChange.innerHTML = `
            <thead class="bg-gray-100">
                <tr>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">User</th>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Email</th>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Date</th>
                    <th class="px-6 py-3 text-gray-600 font-medium uppercase">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-t">
                    <td class="px-6 py-4 flex items-center">
                        <img class="w-10 h-10 rounded-full mr-3" src="https://via.placeholder.com/40" alt="John Michael">
                        <div>
                            <p class="font-semibold">John Michael</p>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        <p class="text-gray-500 text-sm">john@creative-tim.com</p>
                    </td>
                    <td class="px-6 py-4 text-gray-600">23/04/18</td>
                    <td class="px-6 py-4" flex items-center>
                        <button onclick="editClient('John Michael')" class=" px-4 py-2 rounded"><i class="bi bi-pencil-square text-blue-600"></i></button>
                        <button onclick="deleteClient(this)" class=" px-4 py-2 rounded ml-2"><i class="bi bi-trash text-red-600"></i></button>
                    </td>
                </tr>
            </tbody>
        `;
    }
}