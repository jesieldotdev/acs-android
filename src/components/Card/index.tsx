import { useState } from "react"
import { Task } from "@/types/models";
import { TaskDataProps } from "@/utils/tasks";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { Check } from "lucide-react-native";
// import { Check } from "lucide-react-native";

interface CardProps {
    todo: TaskDataProps
}



export const Card = ({ todo }: CardProps) => {
    // const { fetchTasks } = useAppContext()
    const [done, setDone] = useState(todo.status === 'completed')

    // async function onChangeState() {
    //     setDone(!done)
    //     await fetch(`${import.meta.env.VITE_API_URL}/tasks/${todo.id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             status: !done,
    //         }),
    //     })
    //         .then(res => res.json())
    //         .then(json => console.log(json))
    //         .catch(error => console.error('Erro ao atualizar os dados:', error));
    //     return
    // }

    // async function onRemoveTask() {
    //     setDone(!done)
    //     await fetch(`${import.meta.env.VITE_API_URL}/tasks/${todo.id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(json => console.log(json))
    //         .catch(error => console.error('Erro ao atualizar os dados:', error));
    //     fetchTasks()
    // }





    return (
        <View className="flex flex-row mb-2 justify-between border-zinc-400 border-2 rounded-md p-6">
            <View className="">
                <Text className="font-semibold text-zinc-600 text-2xl flex">{todo?.title}</Text>
                <Text className="mt-6 text-xs text-slate-400">12/12/2022</Text>
            </View>
           
                {
                    done ?   <TouchableOpacity className="mr-4 w-10 "><MaterialIcons  name="check" size={22} /></TouchableOpacity>       : null
                }

                {/* <Trash className="mt-auto w-5 h-5 text-zinc-800" /> */}
       

        </View>
    )
}