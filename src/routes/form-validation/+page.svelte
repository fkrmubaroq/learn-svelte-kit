<h1>Form & Validation</h1>
<form method="POST" class="flex flex-col gap-4">
  <input type="text" name="name" placeholder="Name" />
  <input type="email" name="email" placeholder="Email" />
  <input type="password" name="password" placeholder="Password" />
  <button type="submit">Submit</button>
</form>

<style>

    h1{
        @apply text-2xl font-bold text-center;
    }
    input{
        @apply border p-2 rounded-sm focus:bg-gray-50;
    }

    button{
        @apply bg-blue-500 text-white p-2 rounded-sm hover:bg-blue-700;
    }
</style>