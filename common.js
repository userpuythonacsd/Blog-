async function getCurrentUser() {
    const {
        data: { user }
    } = await supabaseClient.auth.getUser();

    return user;
}

async function requireUser() {
    const user = await getCurrentUser();

    if (!user) {
        window.location.href = "login.html";
        return null;
    }

    return user;
}

async function logout() {
    await supabaseClient.auth.signOut();
    window.location.href = "index.html";
}

function escapeHTML(value) {
    const div = document.createElement("div");
    div.textContent = value ?? "";
    return div.innerHTML;
}

function formatDate(date) {
    return new Date(date).toLocaleString();
}

async function getProfile(userId) {

    const { data, error } = await supabaseClient
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

    if (error) {
        console.error(error);
        return null;
    }

    return data;
}
