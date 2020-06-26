class UsersController < ApplicationController
  
  def edit
  end

  def update
    if current_user.update(user_params)
    # ログインしているユーザーをparamsに更新出来た場合
      redirect_to root_path
    # 指定したURLに還移させる　rootに
    else
      render :edit
      # できなかった場合editのビューを出す
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
