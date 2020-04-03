
const getData = async function () {
    const apiUrl = `https://wincacademydatabase.firebaseio.com/nabil/tasks.json`;
    try {
        const result = await fetch(apiUrl, { method: "GET" });
        const data = await result.json();
        let tasks = Object.keys(data).map(key => ({
            id: key,
            description: data[key].description,
            done: data[key].done
        }));

        return tasks;
    } catch (error) {
        console.log(error);
    }
};

const postData = async function (newTask) {
    const apiUrl = `https://wincacademydatabase.firebaseio.com/nabil/tasks.json`;
    try {
        const res = fetch(apiUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        }).then(res => {
            return res.json()
        })

    } catch (error) {
        console.log(error);
    }
};


const deleteData = async function (idNumber) {
    const apiUrl = `https://wincacademydatabase.firebaseio.com/nabil/tasks/${idNumber}.json`;

    try {
        const res = await fetch(apiUrl, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
