'use client'

import Header from '@/app/(app)/Header'
import { useAuth } from '@/hooks/auth'
import { useUserList } from '@/hooks/useUserList'

const UserList = () => {
    const { users, isLoading, error } = useUserList()
    console.log(users)

    return (
        <>
            <Header title="UserList" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {isLoading && <div>Loading...</div>}
                            {error && <div>Error: {error}</div>}
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email Verified At</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {users?.map((user) => (
                                        <tr key={user.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap">{user.id}</td>
                                            <td className="px-6 py-4 whitespace-no-wrap">{user.name}</td>
                                            <td className="px-6 py-4 whitespace-no-wrap">{user.email}</td>
                                            <td className="px-6 py-4 whitespace-no-wrap">{user.email_verified_at}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList
