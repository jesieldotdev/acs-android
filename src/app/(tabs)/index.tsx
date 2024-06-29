import { Card } from '@/components/Card'
import { TASKS } from '@/utils/tasks'
import { MaterialIcons } from '@expo/vector-icons'
import { LogOut } from 'lucide-react-native'
import { useState } from 'react'
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native'

export default function Home() {
    const options = ['Pendentes', 'Feitas'];

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const toggleOption = (option: string) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };
    return (
        <View className='p-2'>
            <View className="flex justify-between items-baseline  mb-4 px-4 pt-4 flex-row">
                <Text className="text-4xl font-light">Agenda<Text className="font-semibold text-slate-600">ACS</Text></Text>

                <TouchableOpacity><MaterialIcons  name="logout" size={22} /></TouchableOpacity>


            </View>




            {/* <Card todo={TASKS[0]}/> */}
            <FlatList
                data={TASKS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Card todo={item} key={item?.id} />}
                contentContainerClassName="gap-2 p-4"
                ListHeaderComponent={() => (
                    <View className="flex-row flex justify-between pt-4">
                        {/* <p >Tarefas</p> */}
                        <View className="flex-wrap gap-2  flex-row mb-4">
                            {options.map((option, index) => (
                                <TouchableOpacity
                                    key={index}
                                    className={`px-6 py-2 bg-zinc-500 text-white text-2xl rounded-full cursor-pointer hover:bg-blue-600 ${selectedOptions.includes(option) ? 'bg-blue-600' : ''
                                        }`}
                                >

                                    <Text className="text-lg bg-zinc-500 text-white">{option}</Text>
                                </TouchableOpacity>
                            ))}

                        </View>
                        <TouchableOpacity><MaterialIcons  name="arrow-downward" size={22} /></TouchableOpacity>

                    </View>
                )}
            />

        </View>
    )
}